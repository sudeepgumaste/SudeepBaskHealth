"use client";
import React from "react";
import useGetLiveData from "@/queries/use-get-live-data";

const Dashboard = () => {
  const { data, isLoading, isError, error } = useGetLiveData({
    enabled: !false,
    refetchInterval: Infinity,
  });

  return <>
    <p>Dashboard</p>;
  </>
};

export default Dashboard;
