import { ArchiveRestore, Check, FileCode2, Gauge, Globe2, PackageOpen, Server, TerminalSquare } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "./Primitives";
import { useReducedMotionSafe } from "../hooks/useReducedMotionSafe";

const steps = [
  [Server, "Create server", "Paper, Vanilla, or custom jar"],
  [PackageOpen, "Install jar", "Validated and atomically placed"],
  [TerminalSquare, "Start and watch", "Preflight plus live console"],
  [FileCode2, "Configure", "Files, plugins, and properties"],
  [ArchiveRestore, "Back up", "Named archive and restore safety"],
  [Gauge, "Diagnose", "Java, ports, memory, and crashes"],
  [Globe2, "Share", "playit.gg or manual forwarding"]
] as const;

export function Workflow() {
  const reduced = useReducedMotionSafe();
  return (
    <section className="section workflow-section">
      <div className="container">
        <SectionHeading title="From a local folder to a reachable server." text="A single guided workflow connects setup, operation, protection, and public access without hiding the system boundaries." />
        <div className="workflow-track">
          <motion.div className="workflow-progress" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: reduced ? 0 : 1.6, ease: "easeOut" }} />
          {steps.map(([Icon, title, text], index) => (
            <motion.div className="workflow-step" key={title} initial={reduced ? { opacity: 0 } : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: reduced ? 0 : index * .1 }}>
              <div><Icon/><span>{index + 1}</span></div><h3>{title}</h3><p>{text}</p>
            </motion.div>
          ))}
        </div>
        <div className="workflow-note"><Check/>Create and configure multiple isolated servers, then run the one you need.</div>
      </div>
    </section>
  );
}
