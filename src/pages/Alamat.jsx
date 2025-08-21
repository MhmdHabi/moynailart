import React from "react";

export default function AlamatPage() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Judul */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Lokasi & Alamat Kami</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Kami hadir di dua lokasi untuk memudahkan Anda. Silakan lihat peta di bawah ini untuk menemukan kami dengan lebih mudah.</p>
        </div>

        {/* Grid Lokasi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Lokasi 1 */}
          <div className="bg-gray-50 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Lokasi 1 - Gang Jeruk, Mendalo Asri</h2>
              <p className="text-gray-600 mb-4">Kecamatan Singkut, Kabupaten Sarolangun</p>
            </div>
            <div className="w-full h-72">
              <iframe
                title="Lokasi 1 - Gang Jeruk Mendalo Asri"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d498.53259025020355!2d103.52517824810114!3d-1.6010427857200942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1755769003694!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Lokasi 2 */}
          <div className="bg-gray-50 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Lokasi 2 - Lokasi 10 Kecamatan Singkut</h2>
              <p className="text-gray-600 mb-4">Kabupaten Sarolangun</p>
            </div>
            <div className="w-full h-72">
              <iframe
                title="Lokasi 2 - Kecamatan Singkut"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d996.4913506136977!2d102.69898976942847!3d-2.5182039600309936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e31d19d04534839%3A0x8b9f44cdc9d1626c!2sSungai%20Benteng%2C%20Kec.%20Singkut%2C%20Kabupaten%20Sarolangun%2C%20Jambi%2037482!5e0!3m2!1sid!2sid!4v1755768707880!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
