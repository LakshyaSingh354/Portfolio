"use-client";

import { Nunito, Orbitron } from "next/font/google";
import Image from "next/image";
// import  { Github, Twitter, Twitter1 }  from "../components/icons.svg";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200"],
});
const orbitron = Orbitron({
  subsets: ["latin"],
});
export function Hero() {
  return (
    <div>
      <div>
        <div className="flex flex-col sm:flex-row justify-around p-8">
          <div>
            <div className={`text-3xl font-bold pt-12 ${orbitron.className} `}>
              I&apos;m Lakshya Singh, an
            </div>
            <div className={`text-3xl font-bold pt-1 ${orbitron.className}`}>
              AI practitionar and Flutter Dev
            </div>
            <div className={`${nunito.className}, pt-3 text-lg opacity-60`}>
              Problem-solver leveraging AI & Flutter for innovative projects
            </div>
          </div>
          <div className="mt-16">
            <button className="relative inline-flex h-16 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span
                className={`${nunito.className} inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-xl font-medium text-white backdrop-blur-3xl`}
              >
                Get in touch
              </span>
            </button>
          </div>
        </div>
      </div>
      <div>
        <hr className="w-2/3 sm:w-1/2 border-gray-400  ml-4 sm:ml-40" />
      </div>
      <div className={`ml-4 sm:ml-40 ${nunito.className} py-4 text-lg flex`}>
        Let&apos;s connect! &mdash;
        <div className="flex">
          <div className="mb-3">
            {/* <div>
            <Github />
            </div>
            <Twitter />
            <Twitter1 /> */}
            <a
              href="https://github.com/LakshyaSingh354"
              target="_blank"
              rel="noreferrer"
              className=""
            >
              <Image
                src="/Users/lakshya/Programming/Web Development/portfolio/components/github.svg"
                width={55}
                height={55}
                alt="Github"
              />
            </a>
          </div>
          <div>
            <a
              href="https://twitter.com/Lakshya0503"
              target="_blank"
              rel="noreferrer"
              className=""
            >
              <Image
                src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/x-social-media-white-icon.png"
                width={23}
                height={5}
                alt="Twitter"
              />
            </a>
          </div>
          <div>
            <a
              href="https://twitter.com/Lakshya0503"
              target="_blank"
              rel="noreferrer"
              className=""
            >
              <Image
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEUAAAD///+rq6unp6eioqIvLy/f39+Xl5eEhIRoaGh2dnZycnL7+/uAgIDm5uaQkJBdXV1MTEyKiorMzMxhYWHY2NgmJibq6ur29vadnZ0eHh7T09O9vb0jIyPc3NxWVlZBQUEUFBQ2NjYYGBizs7PExMRQUFALCwtPqL5OAAAF3ElEQVR4nO2d6XayMBCGjRuoCO641qVa7/8OP1urAkLIO9pvSM48v9s4zxHJNpnUarmcW4N+5Hl+Z7fM/wO7OfjjubrTPvVb3BG9l844UBmCVZc7qvfRC7N6V+Yj7sjew26a7/dN3OeO7g34T89nitOeO8BXWWv9LoQH7hBfYlbwC0z9GgfcUb7AxkDwwoQ7TjofRoIqsPZb1LxEMw/qjjtUGg1TwUuv8ckdLIWtuaBSa+5oKbQRQ9XhDhenCQmqkDtemCUmqFTEHTFKHTUMbRu+zcudMlg2merDgmrMHTPGGDcMNtxBIyzxh1SpHnfUCBOCoDpyR43gUQyn3FEjEH6Gl/E3d9QIxrOKFDPusAFikuGQO2xz9pRXqVIWTYThQekVi+YXREOLOsRP/RppERatSJ1pv8Mtd9wAZquIWWzajlpRBAPuqBGOFEOrRm2E6aFSde6oEYYUQ4s6ixpt2GbTsBReS/zGslWMA25o2UoUPkO0butihxp63BHDnDBB6xaEa7UWNja1q6u4AvX6lr1IfwGGbrFdfeEd811um+ZNSQxTMZSyNzNqZrYPbFtfn2RmkG8S2CxYq51LxzaxRasz+ZRsYawdyBceapY0Qruf0Dv9gndqPDpzh/YuPrs53+PKt2rTt5TDIpnJPh97dqeVFrDrRotGwxv1nLQTBEEQBEEQBEFwkcNw0On73/Q7g2HLmcWGH7Z+fRqn943mcXsduTFtXfrPp8oTouuRTVlLz7QWBmvw8dGiJNA0PeON97hutlMUhW1zQu2xpxnSUv5ea4Tlv0xNdmyBA5YXmrqmWkhLeRtZEZ4sGfuVNXyOzKelnYdlOctchtlSFLqaDiWc9P1HRQxJh1tuBNpHtRKGQ1ou74O1ZrRTBcMuLeE8SVh8CoTLMNHvwAdZ8wgKXzhchvf0sT0pFzuHokQKbkOTqiNgk9UybGH1APTkj7i4DBfXf3nfN/hNbq/BZfjT0idtGFNM3jiV1ZB0xFPHPKfT4DJs1N7UTaTJSYDlMjxehtrQRxvyXH6FzxCqG2PO00+Rz/C9r9E782wSLJfhmnToyqjlihjSzj4akVm+4TL8QzKn6xw0zLxsXDRsO2+YLhngpGHqXIiThqnKFm4aNpw3jBNrb24aJot3OGp4ct5QuW/4OEDhquHjMXXV8FG+w1XDRxkdZw2bzhu2K2oYhB+r8Wm8+nh5rfi+XlMhw/DY/7ovI50PncX0pX3F2xSqKobxYvu8jztcvPBV3jYxqmEY+gX1NjYeecnqViqoCoaBLhFpQ93cuE2DK2C4KqnEGNF+jrclN37D8kLvXVK7t9rj7IYNXZOvKM7P1TDUtniHlFC0rIThSddgArCOzg+zKhiGpuf8Z4SOsVUFQ/N6toTqebsKGCL1+wzvikkw5DeECofhxce3/IZYwRs4AXXCbvgBCeKdIr8hWE9kj75Oe9yGMSaIp9+wG8Ll+76w9m8TRD5DvDQa+JhyGxKuHQJnityGpiPSBFist1RyNsMFbgiO3DxmQ0LtqQH0AeyGhNN1YMlcbkPCNRkb6APYDQmHXcELOZgN55SDrliH2OQ1jClF0rCU1DqzIaUiMXY4g9mQdJMiNs9nNmzrWioCmwQzG4LT3yvYITAx/GND0kUg2ORCDP/YkFT8vPQKeDEUw3caEqb4lhmSrvjG1hPFUAxfNCRdSeu+4UIMxVAMxRBpySQVym5Ds1woMRRD6wwjMRTD/2lIukhRDMVQDMVQDMXQMUNtzeUiRjYZZqvsGoHVPxNDMRRDMRRD6w3L6+Hbbki6Att9QyzR20ZD7OiTGIqhGIqh84ak69rFUAzFkN+w57xhRwyrZGhyJ5zdhmW3pYmhGIqhGIqhGCaK4CJglZSYDUnX+WJFFcRQDMVQDMXQesMv1w0DQnkaMXTBELsy0UZDrOqeGDpjiB2t1Z44+/veAvsd/h4A7B3r5hy1q5zL7J83vV8i/0q390NnMpmYFoFOcXiKyCv4iN7lI3b/AIzzl7jbpm32AAAAAElFTkSuQmCC"
                width={23}
                height={25}
                alt="Linkedin"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
