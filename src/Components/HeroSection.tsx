import PrimaryButton from "./PrimaryButton";

function HeroSection() {
  return (
    <section className="flex justify-between py-32 px-52 bg-blue-950">
      <hgroup className="w-96">
        <h2 className="text-5xl leading-tight text-white font-black">
          This website is awesome
        </h2>
        <p className="text-lg text-slate-200">
          This website has some subtext that goes here under the main title.
          It's a smaller font and the color is lower contrast.
        </p>
        <PrimaryButton>Sign up</PrimaryButton>
      </hgroup>
      <div className="flex flex-col justify-center items-center p-8 bg-slate-200">
        <p>this is a placeholder for an image</p>
      </div>
    </section>
  );
}

export default HeroSection;
