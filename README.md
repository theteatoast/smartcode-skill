# SmartCode Session Extender Skill

An agentic skill designed for Claude Code and OpenCode to maximize useful coding work per session by minimizing waste, reducing repeated work, and enforcing efficient execution behavior. 

## Features
- **Loop Prevention**: Automatically interrupts repeated low-value actions.
- **Context Budgeting**: Prevents large file reads and re-reading unchanged files.
- **Output Suppression**: Enforces concise responses and suppresses verbose CLI/tool outputs (no yapping).
- **Compact Working Memory**: Maintains a compressed explicit JSON state for session context.
- **Token Savings Report**: Automatically calculates and prints a fun summary of how many tokens and minutes were saved at the end of each task!

## Installation & Usage

You can easily install this skill into any of your projects from the terminal via `npx`. This allows anyone to inject the prompt/protocol dynamically.

### Using NPX (Recommended)
You can install this skill globally with a single command. Run this anywhere on your machine:
```bash
npx smartcode-agent-skill-extender
```

### Local Installation
To test it locally:
1. Clone this repository.
2. Run `npm link` in the root directory.
3. In any target project, run:
```bash
smartcode-skill
```

## How It Works
When the CLI runs, it automatically wraps the skill in the required YAML frontmatter and installs it to the global skill directories:
- `~/.claude/skills/session-extender/SKILL.md`
- `~/.opencode/skills/session-extender/SKILL.md`

Once installed, simply open Claude Code or OpenCode, type `/skills`, and you will see the `session-extender` skill available to toggle globally across any project!
