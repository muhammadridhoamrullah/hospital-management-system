import { Outlet } from "react-router-dom";
import { FaRegCheckCircle } from "react-icons/fa";
import { PiLightningBold } from "react-icons/pi";
import { IoMdLock } from "react-icons/io";
import { GiHospitalCross } from "react-icons/gi";

export default function NonAuthLayout() {
  return (
    <div className="bg-white w-full min-h-screen flex justify-between items-start">
      {/* Awal Informasi Rumah Sakit */}
      <div className=" w-1/2 min-h-screen bg-linear-to-tl  from-emerald-400 to-teal-600 p-12 flex flex-col  justify-between items-start text-white">
        {/* Awal Judul */}
        <h1 className="font-bold text-3xl flex justify-start items-center gap-3">
          <GiHospitalCross />
          <span>MediCare</span>
        </h1>
        {/* Akhir Judul */}
        {/* Awal Informasi */}
        <div className=" w-full h-full flex flex-col gap-4">
          <span className="text-4xl font-bold">Hospital Management System</span>
          <p className="text-lg font-semibold">
            Secure and efficient management of hospital operations, patient
            records, and staff coordination.
          </p>
          {/* Awal Keunggulan */}
          {/* Awal Keunggulan 1 */}
          <div className=" w-full h-14 flex justify-start items-center gap-4">
            {/* Awal Logo 1 */}
            <div className=" w-fit h-fit p-2 rounded-md">
              <FaRegCheckCircle className="text-2xl" />
            </div>
            {/* Akhir Logo 1 */}
            {/* Awal Keterangan 1 */}
            <div className=" w-full h-fit flex flex-col justify-between items-start">
              <p className="text-lg font-bold">Secure Access</p>
              <p className="text-sm text-white/60 font-medium">
                Role-based access control for all staff members
              </p>
            </div>
            {/* Akhir Keterangan 1 */}
          </div>
          {/* Akhir Keunggulan 1 */}

          {/* Awal Keunggulan 2 */}
          <div className=" w-full h-14 flex justify-start items-center gap-4">
            {/* Awal Logo 2 */}
            <div className=" w-fit h-fit p-2 rounded-md">
              <PiLightningBold className="text-2xl" />
            </div>
            {/* Akhir Logo 2 */}
            {/* Awal Keterangan 2 */}
            <div className="w-full h-fit flex flex-col justify-between items-start">
              <p className="text-lg font-bold">Fast & Reliable</p>
              <p className="text-sm text-white/60 font-medium">
                Quick access to patient information and operations
              </p>
            </div>
            {/* Akhir Keterangan 2 */}
          </div>
          {/* Akhir Keunggulan 2 */}

          {/* Awal Keunggulan 3 */}
          <div className=" w-full h-14 flex justify-start items-center gap-4">
            {/* Awal Logo 3 */}
            <div className="w-fit h-fit p-2 rounded-md">
              <IoMdLock className="text-2xl" />
            </div>
            {/* Akhir Logo 3 */}
            {/* Awal Keterangan 3 */}
            <div className="w-full h-fit flex flex-col justify-between items-start">
              <p className="text-lg font-bold">HIPAA Compliant</p>
              <p className="text-sm text-white/60 font-medium">
                Enterprise-grade security for patient data protection
              </p>
            </div>
            {/* Akhir Keterangan 3 */}
          </div>
          {/* Akhir Keunggulan 3 */}
          {/* Akhir Keunggulan */}
        </div>
        {/* Akhir Informasi */}
        {/* Awal Footer */}
        <div className="text-sm">
          &copy; 2026 MediCare Hospital System. All rights reserved.
        </div>
        {/* Akhir Footer */}
      </div>
      {/* Akhir Informasi Rumah Sakit */}
      <Outlet />
    </div>
  );
}
