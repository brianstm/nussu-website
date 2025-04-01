import { BlurFade } from "@/components/ui/blur-fade";
import Footer from "@/components/ui/footer";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import { TextReveal } from "@/components/ui/text-reveal";
import { Title } from "@/components/ui/title";
import NussuOrgChart from "@/components/ui/NussuOrgChart";

function Home() {
  const textRevealContent =
    "NUSSU is committed to its vision of being a representative, inclusive, and credible institution ||" +
    "dedicated to promoting and safeguarding the interests and welfare of NUS students. ||" +
    "The Union strives to be approachable and useful, supporting students throughout their university journey.";

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-10">
        <ScrollIndicator />
      </div>

      <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center z-10">
        <div className="text-center mix-blend-difference">
          <Title
            title="About"
            description="NUSSU amplifies students' voices and fosters collaboration with the university administration"
          />
        </div>
      </div>

      <div className="relative z-20">
        <div className="h-screen"></div>

        <section className="w-full h-full bg-white">
          <BlurFade delay={0.3} inView direction="up">
            <TextReveal className="font-medium">{textRevealContent}</TextReveal>
          </BlurFade>
        </section>

        <section className="relative h-full bg-white">
          <div className="py-12 pt-24 max-w-6xl mx-auto">
            <BlurFade delay={0.3} inView direction="up">
              <p className="font-manrope">46th NUSSU Executive Committee</p>
              <img
                src="/images/exco.avif"
                alt="NUSSU Executive Committee"
                className="w-full mt-5"
              />
            </BlurFade>
          </div>
        </section>

        <section className="relative h-full bg-white">
          <div className="py-12 pt-24 max-w-6xl mx-auto">
            <BlurFade delay={0.3} inView direction="up">
              <p className="font-manrope">
                46th NUSSU Organisational Structure
              </p>
              <img
                src="/images/structure.avif"
                alt="NUSSU Organisational Structure"
                className="w-full mt-5"
              />
            </BlurFade>
          </div>
        </section>

        <section className="relative h-full bg-white">
          <div className="py-12 pt-24 max-w-6xl mx-auto">
            <BlurFade delay={0.3} inView direction="up">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
                <div className="text-center">
                  <h2 className="text-5xl text-primary">67+</h2>
                  <p className="mt-2 font-manrope">
                    Changes
                    <br />
                    Pushed
                  </p>
                </div>

                <div className="text-center">
                  <h2 className="text-5xl text-primary">314+</h2>
                  <p className="mt-2 font-manrope">
                    Events
                    <br />
                    Held
                  </p>
                </div>

                <div className="text-center">
                  <h2 className="text-5xl text-primary">203</h2>
                  <p className="mt-2 font-manrope">
                    Current
                    <br />
                    Members
                  </p>
                </div>

                <div className="text-center">
                  <h2 className="text-5xl text-primary">75</h2>
                  <p className="mt-2 font-manrope">
                    Years of
                    <br />
                    History
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="text-center">
                  <h2 className="text-4xl mb-4">Inclusive</h2>
                </div>
                <div className="text-center">
                  <h2 className="text-4xl mb-4">Representative</h2>
                </div>
                <div className="text-center">
                  <h2 className="text-4xl mb-4">Credible</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl mb-4">Our Vision</h2>
                  <p className="text-lg text-gray-700 font-manrope">
                    To be a representative and inclusive institution advocating
                    NUS students' interests
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl mb-4">Our Mission</h2>
                  <p className="text-lg text-gray-700 font-manrope">
                    To foster receptive and engaging platforms promoting
                    students' interests, bridging perspectives and nurturing
                    global leaders of change
                  </p>
                </div>
              </div>
            </BlurFade>
          </div>
        </section>

        <NussuOrgChart />

        <div className="">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
