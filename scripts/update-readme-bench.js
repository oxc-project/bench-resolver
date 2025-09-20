#!/usr/bin/env node

import { exec } from 'child_process';
import { readFile, writeFile } from 'fs/promises';
import { promisify } from 'util';

const execAsync = promisify(exec);

async function runBenchmark() {
  console.log('Running benchmark...');
  try {
    const { stdout } = await execAsync('pnpm run bench');
    return stdout;
  } catch (error) {
    console.error('Error running benchmark:', error);
    process.exit(1);
  }
}

function extractBenchmarkResults(output) {
  // Extract the BENCH Summary section including the title line
  const summaryMatch = output.match(/BENCH  Summary\n\n([\s\S]*?)(?=\nBenchmarking is an experimental feature|$)/);
  if (!summaryMatch) {
    throw new Error('Could not find BENCH Summary in output');
  }

  const summarySection = summaryMatch[1].trim();

  // Extract the main performance multiplier (e.g., "16.04x faster than enhanced-resolve async")
  const mainPerformanceMatch = summarySection.match(/(\d+\.?\d*)x faster than enhanced-resolve async/);
  if (!mainPerformanceMatch) {
    throw new Error('Could not extract main performance metric');
  }

  const mainMultiplier = Math.round(parseFloat(mainPerformanceMatch[1]));

  return {
    summarySection,
    mainMultiplier
  };
}

async function updateReadme(benchmarkResults) {
  console.log('Updating README...');

  const readmePath = 'README.md';
  let readmeContent = await readFile(readmePath, 'utf-8');

  // Find the benchmark results section between markers
  const startMarker = '<!-- BENCHMARK_RESULTS_START -->';
  const endMarker = '<!-- BENCHMARK_RESULTS_END -->';

  const startIndex = readmeContent.indexOf(startMarker);
  const endIndex = readmeContent.indexOf(endMarker);

  if (startIndex === -1 || endIndex === -1) {
    throw new Error('Could not find benchmark results markers in README.md');
  }

  // Create the new benchmark content
  const newBenchmarkContent = `\`oxc-resolver\` is ${benchmarkResults.mainMultiplier}x faster than webpack's \`enhanced-resolve\`.

\`\`\`
 BENCH  Summary

${benchmarkResults.summarySection}
\`\`\``;

  // Replace the content between markers
  const beforeMarker = readmeContent.substring(0, startIndex + startMarker.length);
  const afterMarker = readmeContent.substring(endIndex);

  readmeContent = beforeMarker + '\n' + newBenchmarkContent + '\n' + afterMarker;

  await writeFile(readmePath, readmeContent);
  console.log('README updated successfully');
}

async function main() {
  try {
    const benchmarkOutput = await runBenchmark();
    const results = extractBenchmarkResults(benchmarkOutput);
    await updateReadme(results);

    console.log(`Performance: ${results.mainMultiplier}x faster than enhanced-resolve`);
    console.log('README has been updated with the latest benchmark results');
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

main();