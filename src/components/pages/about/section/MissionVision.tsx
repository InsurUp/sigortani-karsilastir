import React from "react";
import Image from "next/image";
import { missionVisionData } from "@/data/about";

const MissionVision = () => {
  return (
    <section className="md:py-20 py-10">
      <div className="container max-w-[992px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Misyon Card */}
          <div
            className="flex flex-col "
            style={{
              background: "rgba(56, 161, 255, 0.1)",
              borderRadius: 20,
              padding: "30px 40px",
            }}
          >
            {/* <Image
              src={missionVisionData.mission.icon}
              alt="Misyon ikonu"
              width={40}
              height={40} 
            /> */}
            <h2
              style={{
                fontSize: 21,
                fontWeight: "bold",
                marginTop: 10,
                marginBottom: 10,
              }}
            >
              {missionVisionData.mission.title}
            </h2>
            <p
              style={{
                fontSize: 16,
                margin: 0,
                color: "#12141D",
                opacity: 0.7,
              }}
            >
              {missionVisionData.mission.description}
            </p>
          </div>

          {/* Vizyon Card */}
          <div
            className="flex flex-col "
            style={{
              background: "rgba(56, 161, 255, 0.1)",
              borderRadius: 20,
              padding: "30px 40px",
            }}
          >
            {/* <Image
              src={missionVisionData.vision.icon}
              alt="Vizyon ikonu"
              width={40}
              height={40} 
            /> */}
            <h2
              style={{
                fontSize: 21,
                fontWeight: "bold",
                marginTop: 10,
                marginBottom: 10,
              }}
            >
              {missionVisionData.vision.title}
            </h2>
            <p
              style={{
                fontSize: 16,
                margin: 0,
                color: "#12141D",
                opacity: 0.7,
              }}
              dangerouslySetInnerHTML={{ __html: missionVisionData.vision.description }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { MissionVision }; 