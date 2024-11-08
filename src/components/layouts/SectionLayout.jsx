const SectionLayout = ({ title, children }) => {
  return (
    <section className="px-9 md:px-6 sm:px-4 py-5 sm:py-3">
      <h2 className="heading-lg mb-8 sm:mb-4">{title}</h2>
      {children}
    </section>
  );
};

export default SectionLayout;
