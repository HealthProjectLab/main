import { FaStar } from "react-icons/fa";
import { GiPolarStar } from "react-icons/gi";
import { MdLogout, MdNotifications } from "react-icons/md";
import { Link } from "react-router";

export default function Home() {
  return (
    <div>
      <nav className="p-10 flex justify-between">
        <h1 className="text-2xl font-bold cursor-pointer hover:underline">
          🧬 HealthHelp
        </h1>
        <div className="flex gap-6 text-md items-center">
          <MdNotifications className="text-2xl text-blue-500" />
          <button className="border border-dashed py-1 px-3 flex items-center gap-4 cursor-pointer">
            Dinesh Battu
            <span className="text-lg">
              <MdLogout />
            </span>
          </button>
        </div>
      </nav>

      <section className="max-w-2xl mx-auto">
        <p className="flex items-center gap-1 bg-orange-300 w-fit p-2 px-4 rounded-t-md">
          <GiPolarStar /> AskAI
        </p>
        <textarea
          className="border border-black rounded-md w-full h-[250px] hover:outline-none p-4"
          placeholder="Enter your symptoms clearly...."
        ></textarea>
        <button className="btn">Submit!</button>
      </section>

      <section className="flex flex-col gap-8 my-10 max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold underline">Suggested Doctors:</h1>
        <div className="max-w-2xl mx-auto flex border border-dashed p-5">
          <div>
            <h1 className="text-2xl font-bold">B. Gowtham Sai</h1>
            <p className="text-md italic">Cardiologist</p>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptate suscipit doloribus distinctio architecto laboriosam
              iure, reiciendis natus modi officia consequuntur reprehenderit eum
              porro cumque fugit minus autem. Odio, iure neque.
            </p>
          </div>
          <img src="./doctor.jpeg" className="h-[150px] rounded-full" />
        </div>
        <Link to={"/doctor/adith"}>
          <div className="max-w-2xl mx-auto flex border border-dashed p-5">
            <div>
              <h1 className="text-2xl font-bold">Ch. Adith Kumar</h1>
              <p className="text-md italic">Dermetologist</p>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptate suscipit doloribus distinctio architecto laboriosam
                iure, reiciendis natus modi officia consequuntur reprehenderit
                eum porro cumque fugit minus autem. Odio, iure neque.
              </p>
            </div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRripLcqGUKIBfgbtmux6U1UY9UkgezqzJzFw&s"
              className="h-[150px] w-[150px] rounded-full"
            />
          </div>
        </Link>
        <div className="max-w-2xl mx-auto flex border border-dashed p-5">
          <div>
            <h1 className="text-2xl font-bold">B. Dinesh</h1>
            <p className="text-md italic">Psychologist</p>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptate suscipit doloribus distinctio architecto laboriosam
              iure, reiciendis natus modi officia consequuntur reprehenderit eum
              porro cumque fugit minus autem. Odio, iure neque.
            </p>
          </div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ9RH3V2mWxuZL0e45OInc1t25AioP8DpCxQ&"
            className="h-[150px] rounded-full"
          />
        </div>
      </section>
    </div>
  );
}
