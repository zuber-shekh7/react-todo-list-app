import React from "react";

const Dashboard = () => {
  return (
    <section className="container mx-auto mt-5">
      <section>
        <h1 className="font-display text-4xl">Dashboard</h1>
        <div className="border-b h-1 my-5"></div>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6 border rounded p-5 shadow hover:shadow-lg">
            <h2 className="font-display text-2xl">Profile</h2>
            <p className="font-thin">Manage your profile</p>
          </div>
          <div className="col-span-6 border rounded p-5 shadow hover:shadow-lg">
            <h2 className="font-display text-2xl">Devices</h2>
            <p className="font-thin">Manage your devices</p>
          </div>
          <div className="col-span-6 border rounded p-5 shadow hover:shadow-lg">
            <h2 className="font-display text-2xl">Settings</h2>
            <p className="font-thin">Manage your settings</p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Dashboard;
