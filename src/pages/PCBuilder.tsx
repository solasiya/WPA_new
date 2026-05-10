import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Cpu, Zap, HardDrive, Fan, Monitor, Save, Send, Box, Settings } from 'lucide-react';

const partsData = {
  cpu: [
    { id: 'c1', name: 'AMD Ryzen 5 7600X', price: 4500, category: 'Budget', image: '/assets/cpu/AMD%20Ryzen%205%207600X.png' },
    { id: 'c2', name: 'Intel Core i5-13600K', price: 6200, category: 'Mid-Range', image: '/assets/cpu/Intel%20Core%20i5-13600K.png' },
    { id: 'c3', name: 'AMD Ryzen 7 7800X3D', price: 8900, category: 'High-End', image: '/assets/cpu/AMD%20Ryzen%207%207800X3D.png' },
    { id: 'c4', name: 'Intel Core i9-14900K', price: 12500, category: 'Workstation', image: '/assets/cpu/Intel%20Core%20i9-14900K.png' },
  ],
  gpu: [
    { id: 'g1', name: 'NVIDIA RTX 4060 8GB', price: 6800, category: 'Budget', image: '/assets/gpu/NVIDIA%20RTX%204060%208GB.png' },
    { id: 'g2', name: 'NVIDIA RTX 4070 SUPER 12GB', price: 13500, category: 'Mid-Range', image: '/assets/gpu/NVIDIA%20RTX%204070%20SUPER%2012GB.png' },
    { id: 'g3', name: 'AMD Radeon RX 7900 XTX 24GB', price: 21000, category: 'High-End', image: '/assets/gpu/AMD%20Radeon%20RX%207900%20XTX%2024GB.png' },
    { id: 'g4', name: 'MSI GeForce RTX 5090 VENTUS 3X OC G5090-32V3C 32GB', price: 63000, category: 'Workstation', image: '/assets/gpu/MSI_GeForce_RTX_5090_VENTUS_3X_OC_G5090-32V3C_32GB_GDDR7_512-bit_PCIe_5.0_Desktop_Graphics_Card.png' },
  ],
  ram: [
    { id: 'r1', name: '16GB (2x8GB) DDR5 5200MHz', price: 6900, image: '/assets/ram/16GB%20(2x8GB)%20DDR5%205200MHz.png' },
    { id: 'r2', name: '32GB (2x16GB) DDR5 6000MHz CL30', price: 11000, image: '/assets/ram/32GB%20(2x16GB)%20DDR5%206000MHz%20CL30.png' },
    { id: 'r3', name: '64GB (2x32GB) DDR5 6400MHz', price: 23000, image: '/assets/ram/64GB%20(2x32GB)%20DDR5%206400MHz.png' },
  ],
  motherboard: [
    { id: 'm1', name: 'B650M Micro-ATX (AMD)', price: 3000, image: '/assets/motherboard/Gigabyte_B650M_GAMING_WIFI6E_AMD_B650_Ryzen_Socket_AM5_Micro-ATX_Desktop_Motherboard.png' },
    { id: 'm2', name: 'Z790 ATX WiFi (Intel)', price: 4500, image: '/assets/motherboard/Z790_ATX_WiFi__Intel.png' },
    { id: 'm3', name: 'X670E E-ATX High-End (AMD)', price: 8500, image: '/assets/motherboard/msi-x670e-gaming-plus-wifi-4.png' },
  ],
  storage: [
    { id: 's1', name: '1TB NVMe PCIe 4.0 M.2', price: 4400, image: '/assets/storage/Sabrent_SB-RKT4L-1TB_ROCKET_4_1TB_M.2__2280__NVMe_PCI-E_4.0_Solid_State_Drive.png' },
    { id: 's2', name: '2TB NVMe PCIe 4.0 M.2 Gen4', price: 7000, image: '/assets/storage/Western_Digital_WDS200T4B0E_Blue_SN5000_2TB_M.2_2280_PCIe_4.0_x4_NVMe_Solid_State_Drive.png' },
    { id: 's3', name: '4TB NVMe PCIe 5.0 M.2', price: 13000, image: '/assets/storage/Patriot_VP4300L4TBM28H_Viper_VP4300_Lite_4TB_M.2_2280_PCIe_4.0_NVMe_Solid_State_Drive.png' },
  ],
  powerSupply: [
    { id: 'p1', name: '650W 80+ Bronze', price: 1500, image: '/assets/powerSupply/Corsair_CP-9020278-WW_CX650_650W_80_Plus_Bronze_Non-Modular_Black_ATX_Desktop_Power_Supply.png' },
    { id: 'p2', name: '850W 80+ Gold Fully Modular', price: 2800, image: '/assets/powerSupply/MSI_MAG_A850GL_PCIE5_850W_80_Plus_Gold_PCIe_5.0_Fully_Modular_Black_ATX_Desktop_Power_Supply.png' },
    { id: 'p3', name: '1000W 80+ Platinum ATX 3.0', price: 4500, image: '/assets/powerSupply/Corsair_CP-9020297-WW_RM1000e_1000W_80_Plus_Gold_Fully_Modular_Black_ATX_3.1_Desktop_Power_Supply.png' },
  ],
  case: [
    { id: 'cs1', name: 'Montech XR Wood ARGB ATX Mid Tower', price: 1299, image: '/assets/case/Montech_XR_Wood_ARGB_Tempered_Glass_Black_ATX_Mid_Tower_Desktop_Chassis.png' },
    { id: 'cs2', name: 'NZXT H3 Flow 2025 White Micro-ATX', price: 1499, image: '/assets/case/NZXT_CC-H31FW-01_H3_Flow_2025_Tempered_Glass_White_SGCC_Steel_Micro-ATX_Mid_Tower_Desktop_Chassis.png' },
    { id: 'cs3', name: 'Montech Heritage Pro Black Micro-ATX', price: 1944, image: '/assets/case/Montech_Heritage_Pro_Black_Micro-ATX_Mini-Tower_Desktop_Chassis.png' },
    { id: 'cs4', name: 'Antec C8 Constellation Black E-ATX Full Tower', price: 2099, image: '/assets/case/Antec_C8_Constellation_Black_Clear_Tempered_Glass_E-ATX_Full_Tower_Desktop_Chassis.png' },
  ],
  os: [
    { id: 'os1', name: 'PC Assembly, Stress-testing and Window 11 Pro', price: 2999, image: '/assets/Assembly/window_11.png' },
  ]
};

const PCBuilder = () => {
  const [selectedParts, setSelectedParts] = useState<{ [key: string]: any }>({});
  const navigate = useNavigate();

  const handleSelect = (category: string, part: any) => {
    setSelectedParts(prev => ({ ...prev, [category]: part }));
  };

  const calculateTotal = () => {
    return Object.values(selectedParts).reduce((sum, part) => sum + part.price, 0);
  };

  const handleRequestQuote = () => {
    if (Object.keys(selectedParts).length === 0) return;

    let summary = "I would like to request an official quote for the following Custom PC Build:\n\n";
    Object.entries(selectedParts).forEach(([key, part]) => {
      summary += `- ${key.toUpperCase()}: ${part.name} (R ${part.price})\n`;
    });
    summary += `\nEstimated Total: R ${calculateTotal().toLocaleString()}`;

    navigate('/contact', {
      state: {
        prefilledMessage: summary,
        prefilledService: 'PC Build'
      }
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-20 relative">
      {/* Background elements */}
      <div className="absolute top-0 w-full h-96 bg-gradient-to-b from-wpa-purple/10 to-transparent -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-4">
            Custom <span className="text-wpa-purple">PC Builder</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Configure your dream machine. Our experts will assemble, stress-test, and deliver a perfectly tuned system.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Component Selection Area */}
          <div className="lg:w-2/3 space-y-6">

            {/* CPU Selection */}
            <div className="glass p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Cpu className="text-wpa-blue" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Processor (CPU)</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {partsData.cpu.map(part => (
                  <button
                    key={part.id}
                    onClick={() => handleSelect('cpu', part)}
                    className={`p-4 rounded-xl border text-left transition-all flex items-center gap-4 ${selectedParts.cpu?.id === part.id ? 'border-wpa-blue bg-wpa-blue/10' : 'border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500'}`}
                  >
                    <img src={part.image} alt={part.name} className="w-16 h-16 object-contain rounded-lg drop-shadow-sm dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]" />
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white leading-tight mb-1">{part.name}</p>
                          <span className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-300">{part.category}</span>
                        </div>
                        <p className="font-bold text-wpa-blue whitespace-nowrap ml-2">R {part.price}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* GPU Selection */}
            <div className="glass p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Monitor className="text-wpa-purple" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Graphics Card (GPU)</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {partsData.gpu.map(part => (
                  <button
                    key={part.id}
                    onClick={() => handleSelect('gpu', part)}
                    className={`p-4 rounded-xl border text-left transition-all flex items-center gap-4 ${selectedParts.gpu?.id === part.id ? 'border-wpa-purple bg-wpa-purple/10' : 'border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500'}`}
                  >
                    <img src={part.image} alt={part.name} className="w-16 h-16 object-contain rounded-lg drop-shadow-sm dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]" />
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white leading-tight mb-1">{part.name}</p>
                          <span className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-300">{part.category}</span>
                        </div>
                        <p className="font-bold text-wpa-purple whitespace-nowrap ml-2">R {part.price}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* RAM Selection */}
            <div className="glass p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <HardDrive className="text-wpa-blue" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Memory (RAM)</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {partsData.ram.map(part => (
                  <button
                    key={part.id}
                    onClick={() => handleSelect('ram', part)}
                    className={`p-4 rounded-xl border text-center transition-all flex flex-col items-center gap-3 ${selectedParts.ram?.id === part.id ? 'border-wpa-blue bg-wpa-blue/10' : 'border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500'}`}
                  >
                    <img src={part.image} alt={part.name} className="w-full h-24 object-contain rounded-lg drop-shadow-sm dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]" />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm mb-1 leading-tight">{part.name}</p>
                      <p className="font-bold text-wpa-blue text-sm">R {part.price}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Motherboard Selection */}
            <div className="glass p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="text-wpa-purple" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Motherboard</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {partsData.motherboard.map(part => (
                  <button
                    key={part.id}
                    onClick={() => handleSelect('motherboard', part)}
                    className={`p-4 rounded-xl border text-center transition-all flex flex-col items-center gap-3 ${selectedParts.motherboard?.id === part.id ? 'border-wpa-purple bg-wpa-purple/10' : 'border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500'}`}
                  >
                    <img src={part.image} alt={part.name} className="w-full h-24 object-contain rounded-lg drop-shadow-sm dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]" />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm mb-1 leading-tight">{part.name}</p>
                      <p className="font-bold text-wpa-purple text-sm">R {part.price}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Storage Selection */}
            <div className="glass p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Save className="text-wpa-blue" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Storage</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {partsData.storage.map(part => (
                  <button
                    key={part.id}
                    onClick={() => handleSelect('storage', part)}
                    className={`p-4 rounded-xl border text-center transition-all flex flex-col items-center gap-3 ${selectedParts.storage?.id === part.id ? 'border-wpa-blue bg-wpa-blue/10' : 'border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500'}`}
                  >
                    <img src={part.image} alt={part.name} className="w-full h-24 object-contain rounded-lg drop-shadow-sm dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]" />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm mb-1 leading-tight">{part.name}</p>
                      <p className="font-bold text-wpa-blue text-sm">R {part.price}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Power Supply Selection */}
            <div className="glass p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Fan className="text-wpa-purple" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Power Supply (PSU)</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {partsData.powerSupply.map(part => (
                  <button
                    key={part.id}
                    onClick={() => handleSelect('powerSupply', part)}
                    className={`p-4 rounded-xl border text-center transition-all flex flex-col items-center gap-3 ${selectedParts.powerSupply?.id === part.id ? 'border-wpa-purple bg-wpa-purple/10' : 'border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500'}`}
                  >
                    <img src={part.image} alt={part.name} className="w-full h-24 object-contain rounded-lg drop-shadow-sm dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]" />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm mb-1 leading-tight">{part.name}</p>
                      <p className="font-bold text-wpa-purple text-sm">R {part.price}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Case Selection */}
            <div className="glass p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Box className="text-wpa-purple" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">PC Case</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {partsData.case.map(part => (
                  <button 
                    key={part.id}
                    onClick={() => handleSelect('case', part)}
                    className={`p-4 rounded-xl border text-center transition-all flex flex-col items-center gap-3 ${selectedParts.case?.id === part.id ? 'border-wpa-purple bg-wpa-purple/10' : 'border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500'}`}
                  >
                    <img src={part.image} alt={part.name} className="w-full h-32 object-contain rounded-lg drop-shadow-sm dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]" />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm mb-1 leading-tight">{part.name}</p>
                      <p className="font-bold text-wpa-purple text-sm">R {part.price}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Assembly & OS Selection */}
            <div className="glass p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Settings className="text-wpa-blue" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Assembly & OS</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {partsData.os.map(part => (
                  <button 
                    key={part.id}
                    onClick={() => handleSelect('os', part)}
                    className={`p-4 rounded-xl border text-center transition-all flex flex-col items-center gap-3 ${selectedParts.os?.id === part.id ? 'border-wpa-blue bg-wpa-blue/10' : 'border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500'}`}
                  >
                    <img src={part.image} alt={part.name} className="w-full h-32 object-contain rounded-lg drop-shadow-sm dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]" />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm mb-1 leading-tight">{part.name}</p>
                      <p className="font-bold text-wpa-blue text-sm">R {part.price}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Summary Sidebar */}
          <div className="lg:w-1/3">
            <div className="glass p-6 rounded-2xl sticky top-24 border-2 border-wpa-blue/30">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-white/10 pb-4">Build Summary</h3>

              <div className="space-y-4 mb-8">
                {Object.keys(selectedParts).length === 0 ? (
                  <p className="text-gray-500 dark:text-gray-400 italic">Select components to start building.</p>
                ) : (
                  Object.entries(selectedParts).map(([key, part]) => (
                    <div key={key} className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-300 uppercase text-xs font-bold w-16">{key}</span>
                      <span className="text-gray-900 dark:text-white text-sm text-right flex-1 mx-2 truncate">{part.name}</span>
                      <span className="text-wpa-blue font-semibold text-sm">R {part.price}</span>
                    </div>
                  ))
                )}
              </div>

              <div className="border-t border-gray-200 dark:border-white/10 pt-4 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900 dark:text-white">Estimated Total:</span>
                  <span className="text-2xl font-heading font-bold text-gradient">
                    R {calculateTotal().toLocaleString()}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-2">*Prices are estimates and include assembly and stress testing.</p>
              </div>

              <div className="space-y-3">
                <button
                  onClick={handleRequestQuote}
                  disabled={Object.keys(selectedParts).length === 0}
                  className="w-full py-3 rounded-lg bg-wpa-blue text-white font-bold flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={18} /> Request Official Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PCBuilder;
