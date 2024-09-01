import GoogleAnalytics from "./GoogleAnalytics";
import MicrosoftClarity from "./MicrosoftClarity";

const Metrics = () => {
  return (
    <>
      {/* Microsoft Clarity */}
      <MicrosoftClarity />
      {/* Google Analtics */}
      <GoogleAnalytics />
    </>
  );
};

export default Metrics;
