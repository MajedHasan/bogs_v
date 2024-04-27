import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <section className="bg-[url('/img/home-page/banner.jpg')] bg-center bg-cover">
        <div className="lg:py-72 md:py-52 py-32 bg-slate-800/50 text-white">
          <div className="container mx-auto text-center">
            <h2 className="lg:text-4xl text-2xl">
              Looking for the best Domestic Helpers?
            </h2>
            <p className="lg:text-xl text-md mt-12 mb-9">
              Easily connects Helpers and Employers
            </p>
            <div className="flex items-center justify-between flex-col md:flex-row gap-10 mx-auto max-w-lg">
              <Button
                asChild
                className="bg-themeSecondary rounded-full border-2 border-white py-7 px-12"
              >
                <Link href={"/find-job"}>FOR HELPERS</Link>
              </Button>
              <Button
                asChild
                className="bg-themePrimary rounded-full border-2 border-white py-7 px-12"
              >
                <Link href={"/find-candidate"}>FOR EMPLOYERS</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f5f5] py-16">
        <div className="container mx-auto">
          <div className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
            <Image
              src={"/img/home-page/star-badge.webp"}
              alt="Badge"
              width={100}
              height={100}
            />
            <Image
              src={"/img/home-page/star-badge.webp"}
              alt="Badge"
              width={100}
              height={100}
            />
            <Image
              src={"/img/home-page/star-badge.webp"}
              alt="Badge"
              width={100}
              height={100}
            />
            <Image
              src={"/img/home-page/star-badge.webp"}
              alt="Badge"
              width={100}
              height={100}
            />
            <Image
              src={"/img/home-page/star-badge.webp"}
              alt="Badge"
              width={100}
              height={100}
            />
            <Image
              src={"/img/home-page/star-badge.webp"}
              alt="Badge"
              width={100}
              height={100}
            />
          </div>
          <div className="mx-auto max-w-sm flex md:flex-row flex-col items-center gap-10 mt-10">
            <Image
              src={"/img/home-page/star-badge.webp"}
              alt="Badge"
              width={70}
              height={70}
            />
            <div className="text-center text-xl">
              <p className="text-themePrimary">4.8/5 Customer Satisfaction</p>
              <p className="text-[#054a84]">260,000+ Users</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto flex lg:flex-row flex-col items-center gap-10">
          <div className="flex-[2]">
            <Image
              src={"/img/home-page/section-03-img.webp"}
              alt="Img"
              width={1000}
              height={1000}
              className="w-full h-full max-w-sm"
            />
          </div>
          <div className="flex-[3]">
            <div className="max-w-2xl">
              <div className="flex items-center gap-5">
                <span className="text-themeSecondary">------</span>
                <p>OUR COMMUNITY</p>
              </div>
              <h2 className="text-3xl mt-6 mb-7">
                Online Platform Matching Helpers And Employers
              </h2>
              <p className="text-md text-slate-500 leading-6">
                Do you want to use an ethical and transparent platform to
                connect your family with potential candidates or employers? Are
                you quickly looking for a Domestic Helper, maid or Driver?{" "}
                <br />
                HelperPlace is the best way to match your expectations with the
                right candidates or with any foreign domestic helpers. Post your
                job offer and easily access to all our candidates. Our solution
                is free for candidates and we do not have any hidden fees.
              </p>
              <div className="flex items-center gap-6 mt-10">
                <Button asChild className="bg-themePrimary">
                  <Link href={"/find-candidate"}>Find Candidate</Link>
                </Button>
                <Button asChild className="bg-themeSecondary">
                  <Link href={"/find-job"}>Get A Job</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slider Need to be add */}
      <section className="py-20 bg-yellow-50">
        <div className="container mx-auto">
          <div className="flex items-center gap-5">
            <span className="text-themeSecondary">------</span>
            <p>EASILY FIND HELPERS</p>
          </div>
          <h2 className="text-3xl mt-4 mb-8">
            They Are Now Looking For A Job And Are Near You!
          </h2>
          <div>Slider Will be here</div>
          <div className="text-right mt-5">
            <Button asChild className="bg-themePrimary">
              <Link href={"/find-candidate"}>Find More Helpers</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="container mx-auto">
          <div className="text-center">
            <Image
              src={"/img/logo.svg"}
              alt="Logo"
              width={100}
              height={100}
              className="mx-auto"
            />
            <p className="my-2">
              <span className="text-themeSecondary">---------- </span>
              <span className="text-sm">FEATURE</span>
              <span className="text-themeSecondary"> ----------</span>
            </p>
            <h2 className="text-3xl">Search And Find</h2>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-14">
            <Card className="text-center">
              <CardHeader>
                <Avatar className="mx-auto">
                  <AvatarImage src="/img/logo.svg" />
                </Avatar>
                <CardTitle>Fast and secure</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  No Middleman and more choices. Transparent, trustworthy,
                  facilitating and ethical platform. Control by yourself all the
                  hiring process.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Avatar className="mx-auto">
                  <AvatarImage src="/img/logo.svg" />
                </Avatar>
                <CardTitle>For Employers</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Few thousand of Candidates Available. Search, compare, screen,
                  directly message or use our matching analyzer. Interview and
                  hire with no stress.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Avatar className="mx-auto">
                  <AvatarImage src="/img/logo.svg" />
                </Avatar>
                <CardTitle>For Helpers</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Get visibility to find a new employer and get a better job.
                  Easy application and 100% Free (no placement fees, no salary
                  deduction)
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto flex lg:flex-row flex-col items-center gap-10">
          <div className="flex-[3]">
            <div className="max-w-2xl">
              <h2 className="text-3xl mt-6 mb-7">
                More Than 800,000 Connections!
              </h2>
              <p className="text-md text-slate-500 leading-6">
                We offer a free place to allow any domestic helpers to meet you
                with no middlemen. After your screening process, you will
                recruit the best helpers for your family.
              </p>
              <div className="flex md:flex-row flex-col gap-6 mt-10 text-center mb-6">
                <Card className="flex-1">
                  <CardHeader>
                    <CardTitle>300K</CardTitle>
                    <CardDescription className="text-themePrimary">
                      Users
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="flex-1">
                  <CardHeader>
                    <CardTitle>100%</CardTitle>
                    <CardDescription className="text-themeSecondary">
                      FREE FOR JOB SEEKERS
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="flex-1">
                  <CardHeader>
                    <CardTitle>4.8/5</CardTitle>
                    <CardDescription className="text-themePrimary">
                      SATISFACTION
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
              <p className="text-md text-slate-500 leading-6">
                Get instant access to today’s most powerful hiring tools – post
                jobs, search resumes, screen candidates and streamline your
                entire hiring process.
              </p>
              <Button
                asChild
                size={"lg"}
                className="mt-7 bg-themePrimary py-7 px-16"
              >
                <Link href={"/sign-up"}>REGISTER</Link>
              </Button>
            </div>
          </div>
          <div className="flex-[2]">
            <Image
              src={"/img/home-page/section-03-img.webp"}
              alt="Img"
              width={1000}
              height={1000}
              className="w-full h-full max-w-sm"
            />
          </div>
        </div>
      </section>

      {/* Slider Need to be add */}
      <section className="py-20 bg-slate-100">
        <div className="container mx-auto">
          <div className="flex items-center gap-5">
            <span className="text-themeSecondary">------</span>
            <p>AVAILABLE JOBS</p>
          </div>
          <h2 className="text-3xl mt-4 mb-8">
            Local And Western Families Are Looking For You
          </h2>
          <div>Slider Will be here</div>
          <div className="text-right mt-5">
            <Button asChild className="bg-themePrimary">
              <Link href={"/find-job"}>Search Job</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
