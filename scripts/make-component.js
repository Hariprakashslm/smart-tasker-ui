#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const componentName = args[0];
const packageName = args[1] || 'core';

if (!componentName) {
  console.error('Usage: node scripts/make-component.js <ComponentName> [packageName]');
  process.exit(1);
}

const packagesDir = path.join(__dirname, '../src/packages');
const packageDir = path.join(packagesDir, packageName);

if (!fs.existsSync(packageDir)) {
  console.error(`Package "${packageName}" does not exist. Available packages:`);
  const packages = fs.readdirSync(packagesDir);
  packages.forEach(pkg => console.log(`  - ${pkg}`));
  process.exit(1);
}

const componentDir = path.join(packageDir, 'components', componentName);

if (fs.existsSync(componentDir)) {
  console.error(`Component "${componentName}" already exists in package "${packageName}"`);
  process.exit(1);
}

// Create component directory
fs.mkdirSync(componentDir, { recursive: true });

// Component TypeScript file
const componentTsx = `import React from 'react';
import { BaseComponentProps } from '@types';
import { classNames } from '@utils';
import './${componentName}.css';

export interface ${componentName}Props extends BaseComponentProps {
  /** Component content */
  children?: React.ReactNode;
}

/**
 * ${componentName} component
 */
export const ${componentName}: React.FC<${componentName}Props> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={classNames('${componentName.toLowerCase()}', className)}
      {...props}
    >
      {children}
    </div>
  );
};
`;

// Component CSS file
const componentCss = `/* ${componentName} styles */
.${componentName.toLowerCase()} {
  /* Add your styles here */
}
`;

// Component index file
const componentIndex = `export { ${componentName} } from './${componentName}';
export type { ${componentName}Props } from './${componentName}';
`;

// Write files
fs.writeFileSync(path.join(componentDir, `${componentName}.tsx`), componentTsx);
fs.writeFileSync(path.join(componentDir, `${componentName}.css`), componentCss);
fs.writeFileSync(path.join(componentDir, 'index.ts'), componentIndex);

// Update package index
const packageIndexPath = path.join(packageDir, 'index.ts');
let packageIndex = fs.readFileSync(packageIndexPath, 'utf8');

// Add export to package index
const exportLine = `export { ${componentName} } from './components/${componentName}';`;
if (!packageIndex.includes(exportLine)) {
  packageIndex += `\n${exportLine}`;
  fs.writeFileSync(packageIndexPath, packageIndex);
}

console.log(`✅ Created ${componentName} component in ${packageName} package`);
console.log(`📁 Location: ${componentDir}`);
console.log(`📝 Files created:`);
console.log(`   - ${componentName}.tsx`);
console.log(`   - ${componentName}.css`);
console.log(`   - index.ts`);
console.log(`📦 Updated package index: ${packageIndexPath}`); 