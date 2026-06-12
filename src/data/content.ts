import {
  Activity, ArchiveRestore, Boxes, Bug, Cpu, FileCode2, Gauge, Globe2,
  HardDrive, PackageOpen, Plug, RadioTower, Server, Settings2, ShieldCheck,
  TerminalSquare, Wrench
} from "lucide-react";

export const release = {
  version: "1.0.0",
  releasedAt: "June 12, 2026",
  windows: {
    filename: "Minepanel Setup 1.0.0.exe",
    size: "110.35 MB",
    sha256: "3085A7D0DDE40B175A02765A54D2DE6B8F12796EAD0922D5FA723685353290E4",
    href: "https://github.com/debapriyachatterjee464-ops/MinePanel/releases/download/v1.0.0/Minepanel.Setup.1.0.0.exe",
    platform: "Windows 10/11 x64",
    signed: false
  },
  linux: {
    filename: "Minepanel-1.0.0-amd64.deb",
    size: "111.31 MB",
    sha256: "B10E7B86FD7F6772065BAE447E3FD8AEC60CF53CB41C4491541D3A42D28B9B18",
    href: "https://github.com/debapriyachatterjee464-ops/MinePanel/releases/download/v1.0.0/Minepanel-1.0.0-amd64.deb",
    platform: "Debian-based Linux x64",
    signed: false
  }
};

export const featureGroups = [
  { icon: Server, title: "Server fleet", text: "Create isolated Paper, Vanilla, and custom-jar servers, then run the one you need." },
  { icon: TerminalSquare, title: "Live console", text: "Search and filter real Java output, send commands, pause rendering, and retain command history." },
  { icon: FileCode2, title: "Monaco file workspace", text: "Edit server files with tabs, syntax highlighting, Quick Open, global search, uploads, ZIP, and safe saves." },
  { icon: PackageOpen, title: "Version installer", text: "Install Paper and Vanilla releases with background progress, validation, resumable jobs, and Paper jar reuse." },
  { icon: Cpu, title: "Resources and JVM", text: "Set memory, CPU priority, Java path, console limits, crash policy, and optimization profiles per server." },
  { icon: Activity, title: "Runtime metrics", text: "Track real CPU, RAM pressure, process ID, uptime, port, allocation, and the latest exit detail." },
  { icon: Plug, title: "Plugin management", text: "Upload, enable, disable, and remove Paper plugin jars with clear restart-required guidance." },
  { icon: Settings2, title: "Visual properties", text: "Safely edit common server.properties values while preserving unknown keys and recovering corrupt files." },
  { icon: ArchiveRestore, title: "Backups and recovery", text: "Create named backups, schedule retention, stage restores, and roll back if copying fails." },
  { icon: RadioTower, title: "Public access", text: "Use guided port forwarding or the official playit.gg app, with address discovery and DNS verification." },
  { icon: Gauge, title: "Diagnostics", text: "Check Java, EULA, ports, memory, jars, filesystem access, network state, and common crash patterns." },
  { icon: ShieldCheck, title: "Local-first safety", text: "Keep worlds and data on your machine with path confinement, validated IPC, atomic writes, and guarded processes." }
];

export type DocArticle = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  icon: typeof Server;
  steps: string[];
  command?: string;
  prerequisites?: string[];
  expected?: string;
  troubleshooting?: string[];
};

export const docs: DocArticle[] = [
  { slug: "install/windows", title: "Install on Windows", summary: "Install MinePanel Local with the Windows setup wizard.", category: "Getting started", icon: HardDrive, prerequisites: ["Windows 10 or 11 x64", "A compatible Java runtime", "Internet access for server jar downloads"], steps: ["Download the Windows x64 installer.", "Optionally verify its published SHA-256 checksum.", "Open the setup wizard and choose an installation folder.", "Choose desktop and Start menu shortcuts if desired.", "Finish setup and launch MinePanel.", "Confirm the server fleet dashboard opens."], expected: "MinePanel opens and creates C:\\Users\\<User>\\MinePanel\\ for local server data.", troubleshooting: ["The current installer is unsigned; review the publisher warning and verify the checksum rather than bypassing warnings blindly.", "Install Java separately before starting a Minecraft server."] },
  { slug: "install/linux", title: "Install on Debian or Ubuntu", summary: "Install the official amd64 Debian package.", category: "Getting started", icon: HardDrive, prerequisites: ["Debian 12+, Ubuntu 22.04+, Kali x64, or compatible Mint", "An x86-64 graphical desktop", "Java installed separately"], steps: ["Download the .deb package.", "Open it with your software installer or use APT.", "Launch MinePanel from the application menu or run minepanel.", "Install Java 21 for modern Paper and Vanilla versions.", "Confirm the server fleet dashboard opens."], command: "sudo apt install ./Minepanel-1.0.0-amd64.deb", expected: "MinePanel opens and creates ~/MinePanel for local server data.", troubleshooting: ["Run sudo apt-get install -f if package dependencies need repair.", "Use minepanel --ozone-platform=x11 for a Wayland rendering issue.", "Never disable the Chromium sandbox with --no-sandbox."] },
  { slug: "create-server", title: "Create a server", summary: "Create an isolated Paper, Vanilla, or custom-jar instance.", category: "Server basics", icon: Server, steps: ["Select Create Server.", "Choose a name, server type, Minecraft version, port, and memory.", "Read and accept the Minecraft EULA.", "Wait for the jar installation or select a custom jar.", "Open the new server workspace."] },
  { slug: "console", title: "Use the live console", summary: "Read logs, filter output, and send Minecraft commands.", category: "Operations", icon: TerminalSquare, steps: ["Open a server and select Console.", "Start the server and wait for live output.", "Use warning or error filters to narrow logs.", "Enter a Minecraft command without the leading slash.", "Use Up and Down to revisit command history."] },
  { slug: "files", title: "Manage and edit files", summary: "Work inside the server root with Monaco and guarded file tools.", category: "Operations", icon: FileCode2, steps: ["Open Files from the server sidebar.", "Select a file to open it in an editor tab.", "Use Ctrl+S to save or Ctrl+Shift+S to save all.", "Create, upload, rename, archive, extract, or delete with the toolbar.", "Use Ctrl+P for Quick Open and Ctrl+Shift+F for global search."] },
  { slug: "plugins", title: "Manage Paper plugins", summary: "Upload and defer plugin changes until restart.", category: "Operations", icon: Plug, steps: ["Stop the server when practical.", "Open Plugins and upload a .jar.", "Enable or disable a plugin.", "Restart the server so the changed plugin set is loaded."] },
  { slug: "versions", title: "Change a Paper version", summary: "Install a cached or downloaded Paper server jar safely.", category: "Operations", icon: PackageOpen, steps: ["Stop the server.", "Open Version in its workspace.", "Choose a supported Paper version.", "Watch the background task progress.", "Start the server after the jar is atomically replaced."] },
  { slug: "resources", title: "Configure Java and memory", summary: "Tune allocation, Java, priority, and crash recovery.", category: "Configuration", icon: Cpu, steps: ["Open Resources.", "Confirm the Java executable or set an absolute path.", "Set minimum and maximum RAM.", "Choose a JVM profile and CPU priority.", "Save changes and restart the server to apply launch settings."] },
  { slug: "properties", title: "Edit server properties", summary: "Change common Minecraft settings with validation.", category: "Configuration", icon: Settings2, steps: ["Open Properties.", "Adjust MOTD, port, players, game mode, difficulty, or distances.", "Review validation messages.", "Save changes; MinePanel preserves unknown keys and creates a backup."] },
  { slug: "backups", title: "Create and restore backups", summary: "Protect an instance with named archives and guarded restore.", category: "Data safety", icon: ArchiveRestore, steps: ["Open Backups and enter a human-readable name.", "Create the backup and monitor its background task.", "Stop the server before restoring.", "Keep the pre-restore safety backup enabled.", "Confirm the overwrite warning and allow staged restore to finish."] },
  { slug: "public-access", title: "Let friends connect", summary: "Choose playit.gg or manual port forwarding.", category: "Networking", icon: Globe2, steps: ["Start the Minecraft server locally.", "Open Access.", "Choose the official playit.gg workflow or manual port forwarding.", "Target 127.0.0.1 and the configured server port.", "Verify the public address before sharing it."] },
  { slug: "playit", title: "Configure playit.gg", summary: "Use the official playit app and account flow with MinePanel.", category: "Networking", icon: RadioTower, prerequisites: ["A running local Minecraft server", "An official playit.gg account", "The official playit application"], steps: ["Open the server Access page.", "Choose Install playit.gg App to open the official download flow.", "Sign in or create an account on the official playit website.", "Create a Minecraft Java tunnel targeting 127.0.0.1 and the server port.", "Return to MinePanel and start public access.", "Wait for address discovery and DNS verification."], expected: "The Access page reports an active service and a verified public join address.", troubleshooting: ["MinePanel does not collect or store your playit.gg password.", "Linux users install the official Linux package or binary; the Windows MSI is not bundled on Linux."] },
  { slug: "port-forwarding", title: "Configure port forwarding", summary: "Create a manual router rule when direct hosting is available.", category: "Networking", icon: Globe2, prerequisites: ["Router administration access", "A stable LAN address for the server computer", "A public IP that is not blocked by CGNAT"], steps: ["Open Access and note the LAN IP, gateway, and Minecraft port.", "Open the router administration page.", "Create a TCP forwarding rule from the external port to the server computer and Minecraft port.", "Allow the port through the operating-system firewall when required.", "Start the server and test from outside the home network."], expected: "External players can connect to the public IP and forwarded port while the PC and server remain online.", troubleshooting: ["Router interfaces differ; there is no universal screenshot or button name.", "CGNAT can prevent inbound forwarding. Use playit.gg when direct hosting is unavailable."] },
  { slug: "diagnostics", title: "Run diagnostics", summary: "Find common startup, Java, port, and crash issues.", category: "Troubleshooting", icon: Bug, steps: ["Stop conflicting Java or playit processes.", "Open Diagnostics.", "Run the complete check set.", "Resolve EULA, jar, Java, memory, or port failures first.", "Test without plugins when a crash persists."] }
];

export const faq = [
  ["Is MinePanel a hosting provider?", "No. MinePanel manages Minecraft Java servers running on your own Windows or Linux computer."],
  ["Does my computer need to stay on?", "Yes. Players can connect only while your computer, Minecraft server, and required network tunnel or forwarding rule are active."],
  ["Can I create multiple servers?", "Yes. Each server has isolated files and settings. The current release runs one Minecraft server at a time."],
  ["Does MinePanel support Paper?", "Yes. It includes a Paper version installer, background progress, safe jar replacement, and shared local jar reuse."],
  ["Does it support Vanilla?", "Yes. MinePanel resolves official Mojang metadata and downloads the selected Vanilla server jar."],
  ["Can I use a custom jar?", "Yes. MinePanel can import and validate a custom .jar as the instance server.jar."],
  ["Does MinePanel install Java?", "No. It detects Java, supports a custom Java path, validates compatibility, and explains mismatches."],
  ["Can friends join over the internet?", "Yes, when the computer and server are running and public access is configured through the official playit.gg app or manual router port forwarding."],
  ["Does MinePanel store my playit.gg password?", "No. Login and account creation happen on the official playit.gg website."],
  ["Are my worlds uploaded?", "Not by MinePanel. Server files, worlds, plugins, settings, and backups remain in your local MinePanel data folder."],
  ["Can MinePanel restore backups safely?", "Restore requires the server to be stopped, offers a pre-restore safety backup, stages extraction, and rolls live files back if restore copying fails."],
  ["What happens if a server crashes?", "MinePanel records the exit, shows crash detail, analyzes common patterns, and can optionally perform bounded exponential-backoff restarts."],
  ["Why will MinePanel not start my server?", "Common reasons include a missing jar, unaccepted EULA, missing or incompatible Java, an occupied port, unsafe memory settings, or another MinePanel server already running."],
  ["Does it support Forge, Fabric, or modpacks?", "They are not first-class installation workflows in this release. A compatible custom jar may work, but mod loaders and modpacks are not automated."],
  ["Is MinePanel affiliated with Minecraft?", "No. MinePanel Local is an independent project and is not affiliated with Mojang Studios or Microsoft."]
];

export const compatibility = [
  { icon: Boxes, name: "Windows", detail: "Windows 10 or 11", support: "x64 .exe installer" },
  { icon: Boxes, name: "Debian Linux", detail: "Debian 12+", support: "x64 .deb package" },
  { icon: Boxes, name: "Ubuntu", detail: "Ubuntu 22.04+", support: "x64 .deb package" },
  { icon: Boxes, name: "Kali and Mint", detail: "Supported Debian bases", support: "x64 .deb package" },
  { icon: Wrench, name: "Minecraft", detail: "Java Edition servers", support: "Paper, Vanilla, custom jar" }
];
