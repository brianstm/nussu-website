import WorkPages from "@/components/ui/WorkPages";

const StudentLifeFair = () => {
  return (
    <WorkPages
      title={"Student Life Fair"}
      description={`NUSSU's Student Life Fair (SLF) is a highly anticipated annual event and will be held on campus on 14th and 15th of August 2025. This event is where student organisations come together to put up booths to showcase their talents and recruit new members.  Students will have the opportunity to visit a range of booths, consisting of Interest Groups, Societies, Arts Group and Sports Groups. SLF showcases the diverse non-academic opportunities the student community of NUS offers to its members, drawing crowds of over 10,000 people across the spread of the event annually.`}
      type={"Student Life"}
      length={"2 Days"}
      location={"NUS Yusof Ishak House"}
      date={"14 - 15 August 2025"}
      images={[
        "https://framerusercontent.com/images/G0k3fT6rtPqZruG1qiSPW2dxODk.png",
        "https://framerusercontent.com/images/UoyVp6i5e4s5m3lqANMTSkqBps.jpg",
      ]}
    />
  );
};

export default StudentLifeFair;
