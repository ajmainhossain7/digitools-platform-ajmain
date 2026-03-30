import { ICONS, ICON_STYLES } from "./Icons";

const Icon = ({ name, size = 24, className = "" }) => {
  const Component = ICONS[name];

  if (!Component) return null;

  return (
    <div
      className={`flex items-center justify-center rounded-full ${ICON_STYLES[name]} ${className}`}
    >
      <Component size={size} />
    </div>
  );
};

export default Icon;