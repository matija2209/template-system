"use strict";
// 'use client';
// import { useEffect, useState } from 'react';
// import CurrentYear from '../../components/current-year';
// import { Phone, Mail, MapPin } from "lucide-react";
// import type { SiteFooterProps } from '@/types';
// export function SiteFooter({
//   LinkComponent,
//   ImageComponent,
//   phone,
//   email,
//   logo,
//   companyName,
//   companyAddress,
//   companyCity,
//   companyPostalCode,
// }: SiteFooterProps) {
//   const [phone, setPhone] = useState('');
//   const [email, setEmail] = useState('');
//   useEffect(() => {
//     // Dynamically construct the phone number to avoid scrapers
//     setPhone('0' + '68 179 728');
//     // Dynamically construct the email to avoid scrapers
//     const username = 'matija';
//     const domain = 'obrtniknaspletu.si';
//     setEmail(`${username}@${domain}`);
//   }, []);
//   return (
//     <footer className="bg-muted py-12 px-4 md:px-6 border-t">
//       <div className="container max-w-6xl mx-auto">
//         {/* Logo and Company Info */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* Logo */}
//           <div className="flex flex-col items-start">
//             <LinkComponent href="/" className="flex items-center gap-2 mb-4">
//               <ImageComponent
//                 src={Logo}
//                 alt="ObrtnikNaSpletu Logo"
//                 width={50}
//                 height={50}
//                 className="h-12 w-auto"
//                 priority
//               />
//               <span className="font-bold text-xl">ObrtnikNaSpletu</span>
//             </LinkComponent>
//             <p className="text-sm text-muted-foreground">
//               Profesionalne spletne strani za obrtnike po fiksni ceni.
//             </p>
//           </div>
//           {/* Company Info */}
//           <div className="space-y-2 text-sm">
//             <p className="font-semibold text-foreground mb-4">Matija Žiberna, Računalniško svetovanje, s.p.</p>
//             <p className="text-muted-foreground">Davčna številka SI: 97182052</p>
//             <p className="text-muted-foreground">Matična: 8460485000</p>
//             <p className="text-muted-foreground">Datum vpisa: 2019</p>
//           </div>
//           {/* Contact Info */}
//           <div className="space-y-3 text-sm">
//             <p className="font-semibold text-foreground mb-4">Kontakt</p>
//             {phone && (
//               <a
//                 href={`tel:${phone.replace(/\s/g, '')}`}
//                 className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
//               >
//                 <Phone className="h-4 w-4" />
//                 {phone}
//               </a>
//             )}
//             {email && (
//               <a
//                 href={`mailto:${email}`}
//                 className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
//               >
//                 <Mail className="h-4 w-4" />
//                 {email}
//               </a>
//             )}
//             <p className="flex items-start gap-2 text-muted-foreground">
//               <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
//               <span>Slovenija</span>
//             </p>
//           </div>
//         </div>
//         {/* Navigation */}
//         <div className="mt-8 pt-8 border-t border-border">
//           <nav className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
//             <div>
//               <p className="font-semibold text-foreground mb-3">Navigacija</p>
//               <ul className="space-y-2">
//                 <li>
//                   <LinkComponent href="/" className="text-muted-foreground hover:text-primary transition-colors">
//                     Domov
//                   </LinkComponent>
//                 </li>
//                 <li>
//                   <LinkComponent href="/o-nas" className="text-muted-foreground hover:text-primary transition-colors">
//                     O nas
//                   </LinkComponent>
//                 </li>
//                 <li>
//                   <LinkComponent href="/storitve" className="text-muted-foreground hover:text-primary transition-colors">
//                     Storitve
//                   </LinkComponent>
//                 </li>
//                 <li>
//                   <LinkComponent href="/kontakt" className="text-muted-foreground hover:text-primary transition-colors">
//                     Kontakt
//                   </LinkComponent>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <p className="font-semibold text-foreground mb-3">Pravno</p>
//               <ul className="space-y-2">
//                 <li>
//                   <LinkComponent href="/zasebnost" className="text-muted-foreground hover:text-primary transition-colors">
//                     Politika zasebnosti
//                   </LinkComponent>
//                 </li>
//                 <li>
//                   <LinkComponent href="/pogoji" className="text-muted-foreground hover:text-primary transition-colors">
//                     Splošni pogoji
//                   </LinkComponent>
//                 </li>
//                 <li>
//                   <LinkComponent href="/piskotki" className="text-muted-foreground hover:text-primary transition-colors">
//                     Piškotki
//                   </LinkComponent>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <p className="font-semibold text-foreground mb-3">Podpora</p>
//               <ul className="space-y-2">
//                 <li>
//                   <LinkComponent href="/kontakt" className="text-muted-foreground hover:text-primary transition-colors">
//                     Kontakt
//                   </LinkComponent>
//                 </li>
//                 <li>
//                   <LinkComponent href="/pogosta-vprasanja" className="text-muted-foreground hover:text-primary transition-colors">
//                     Pogosta vprašanja
//                   </LinkComponent>
//                 </li>
//               </ul>
//             </div>
//           </nav>
//           {/* Copyright */}
//           <p className="mt-8 text-sm text-muted-foreground">
//             © <CurrentYear /> ObrtnikNaSpletu. Vse pravice pridržane.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// } 
