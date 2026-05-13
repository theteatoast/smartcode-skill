#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');

const skillName = 'session-extender';
const skillFileName = 'session_extender_skill.md';
const sourceSkillPath = path.join(__dirname, skillFileName);

function installSkill() {
  console.log(`Installing SmartCode ${skillName} skill globally...`);

  try {
    let skillContent = fs.readFileSync(sourceSkillPath, 'utf8');

    // Add YAML frontmatter required by Claude Code / OpenCode /skills system
    const frontmatter = `---
name: ${skillName}
description: Maximize useful coding work per session by minimizing waste, reducing repeated work, and enforcing efficient execution behavior.
---
`;
    if (!skillContent.startsWith('---')) {
        skillContent = frontmatter + skillContent;
    }

    const homeDir = os.homedir();
    
    // Paths for global skills
    const claudeSkillsDir = path.join(homeDir, '.claude', 'skills', skillName);
    const openCodeSkillsDir = path.join(homeDir, '.opencode', 'skills', skillName);
    // Some Linux/Mac setups use .config
    const openCodeConfigSkillsDir = path.join(homeDir, '.config', 'opencode', 'skills', skillName);

    const targetDirs = [claudeSkillsDir, openCodeSkillsDir, openCodeConfigSkillsDir];

    for (const dir of targetDirs) {
        fs.mkdirSync(dir, { recursive: true });
        const destPath = path.join(dir, 'SKILL.md');
        fs.writeFileSync(destPath, skillContent);
        console.log(`✅ Installed to: ${destPath}`);
    }

    console.log(`\n🚀 Successfully installed! You can now type "/skills" inside Claude Code or OpenCode to enable "${skillName}".`);
  } catch (error) {
    console.error('❌ Failed to install skill:', error.message);
  }
}

installSkill();
