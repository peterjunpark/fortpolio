import { ConditionalLink } from "@/components/utils";

type Skill = string | [string, string];

type SkillsProps = {
  skills: Skill[];
};

const renderSkill = (skill: Skill) => {
  const condition = Array.isArray(skill);
  const skillName = condition ? skill[0] : skill;
  const href = condition ? skill[1] : undefined;

  return (
    <li key={skillName} className="rounded-md bg-overlay px-2 py-1">
      <ConditionalLink key={skillName} href={href}>
        {skillName}
      </ConditionalLink>
    </li>
  );
};

export function SkillsArray({ skills }: SkillsProps) {
  return (
    <ul className="my-6 flex flex-wrap justify-center gap-2">
      {skills.map((skill) => renderSkill(skill))}
    </ul>
  );
}
