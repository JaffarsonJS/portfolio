import { FileText, Download } from "lucide-react";
import { profile } from "@/data/profile";
import { Reveal, SectionHeader } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";

export function ResumeSection() {
  return (
    <section id="resume" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      <div className="glass overflow-hidden rounded-[2rem] p-8 sm:p-12">
        <Reveal>
          <SectionHeader
            index="07"
            kicker="Resume"
            title="Want the full story?"
            description="The PDF is the same resume this site was built from — roles, technologies, and project detail in one place."
          />
        </Reveal>
        <div className="flex flex-wrap gap-3">
          <MagneticButton
            href={profile.resumePath}
            download
            className="bg-[var(--accent)] text-[#06110e]"
          >
            <Download size={16} />
            Download resume
          </MagneticButton>
          <MagneticButton
            href={profile.resumePath}
            className="border border-[var(--line)] text-[var(--ink)]"
            ariaLabel="View resume"
          >
            <FileText size={16} />
            View resume
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
