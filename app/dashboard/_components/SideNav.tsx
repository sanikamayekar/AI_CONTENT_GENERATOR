"use client";
import { SignOutButton } from "@clerk/nextjs";
import { FileClock, Home, Settings, WalletCards } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import UsageTrack from "./UsageTrack";
import Link from "next/link";
import {  History, CreditCard} from 'lucide-react'

function SideNav() {
  const MenuList = [
    {
      name: 'Home',
      icon: Home,
      path: '/dashboard',
    },
    {
      name: 'History',
      icon: FileClock,
      path: '/dashboard/history',
    },
    {
      name: 'Billing',
      icon: WalletCards,
      path: '/dashboard/billing',
    },
    {
      name: 'Settings',
      icon: Settings,
      path: '/dashboard/settings',
    },
  ];

  const path = usePathname();

  useEffect(() => {
    console.log(path)
  }, [])

  return (
    <div className="h-screen p-5 shadow-sm border bg-white flex flex-col">
      <div className="flex justify-center">
        <Image src={"/logo.svg"} alt="logo" width={120} height={100} />
      </div>
      <hr className="my-6 border" />


      
<div className="mt-3 flex-grow">
{MenuList.map((menu, index) => (
  <Link href={menu.path} key={index}>
  <div
    key={index}
    className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center 
      ${ path == menu.path && 'bg-primary text-white' }`} >
    <menu.icon className='h-6 w-6'/>
    <h2>{menu.name}</h2>
  </div>
  </Link>
))}
</div>

      <div className="absolute bottom-10 left-0 w-full">
        <UsageTrack />
      </div>   
    </div>
  );
}

export default SideNav;




















