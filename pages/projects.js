import Image from "next/image";

function projects() {
  let pics = ["work-2", "work-3", "work-4", "work-5", "work-6"];
  return (
    <div>
      {pics.map((imagepath) => {
        return (
          <div key={imagepath}>
            <Image
              src={`/${imagepath}.jpg`}
              width="400"
              height="400"
              alt="project"
            />
          </div>
        );
      })}
    </div>
  );
}

export default projects;
