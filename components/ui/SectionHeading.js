export default function SectionHeading({
  label,
  title,
  subtitle,
  centered = true,
  light = false,
}) {
  return (
    <div className={centered ? "text-center" : ""}>
      {label && (
        <div
          className={`flex items-center gap-3 mb-4 ${
            centered ? "justify-center" : ""
          }`}
        >
          <span
            className={`text-xs font-semibold tracking-widest uppercase ${
              light ? "text-primary-light" : "text-primary"
            }`}
          >
            {label}
          </span>
          <div
            className={`h-[1px] w-12 ${
              light
                ? "bg-gradient-to-r from-primary-light/40 to-transparent"
                : "bg-gradient-to-r from-primary/40 to-transparent"
            }`}
          />
        </div>
      )}

      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight ${
          light ? "text-white" : "text-dark"
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`text-base md:text-lg mt-5 max-w-2xl leading-relaxed ${
            light ? "text-gray-400" : "text-body"
          } ${centered ? "mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
