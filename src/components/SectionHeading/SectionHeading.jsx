import "./SectionHeading.css"

const SectionHeading = ({text}) => {
  return (
    <h1 className="text-center heading">
      <span>{text}</span>
      <i class="ri-scissors-line"></i>
    </h1>
  );
};

export default SectionHeading;
