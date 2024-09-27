import { SvgChecked } from "../../../public/svg/Cheked";

interface TagProps {
    title: string;
}

export function Tag ({ title}: TagProps) {
    return (
      <div className="flex items-center justify-between gap-3">
        <SvgChecked/>
        <span className="text-lg font-semibold text-gray500">{title}</span>
      </div>
    )
}