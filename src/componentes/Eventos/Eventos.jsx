import React from 'react';
import './estilo.css';

const events = [
  { name: "Friday", date: "26 de out.", time: "19:00" },
  { name: "Quinta-feira", date: "25 de out.", time: "19:00" },
  { name: "Quinta-feira", date: "23 de out.", time: "19:00" },
  { name: "Pré-temporada em Valência", date: "23 de out.", time: "19:00" },
  { name: "ePrix de Londres II", date: "30 de jul.", time: "13:03" },
  { name: "ePrix de Londres I", date: "29 de jul.", time: "13:03" },
  { name: "ePrix de Roma II", date: "16 de jul.", time: "10:03" },
  { name: "ePrix de Roma I", date: "15 de jul.", time: "10:03" },
  { name: "ePrix de Portland", date: "24 de jun.", time: "21:03" },
  { name: "ePrix de Jacarta II", date: "04 de jun.", time: "05:03" },
  { name: "ePrix de Jacarta I", date: "03 de jun.", time: "05:03" },
  { name: "ePrix de Seul II", date: "Cancelado", time: "" },
  { name: "ePrix de Seul I", date: "Cancelado", time: "" },
  { name: "ePrix de Mônaco", date: "06 de mai.", time: "10:03" },
  { name: "ePrix de Berlim II", date: "23 de abr.", time: "10:03" },
  { name: "ePrix de Berlim I", date: "22 de abr.", time: "10:03" },
  { name: "ePrix de São Paulo", date: "25 de mar.", time: "14:03" },
  { name: "ePrix da Cidade do Cabo", date: "25 de fev.", time: "11:03" },
  { name: "ePrix de Hyderabad", date: "11 de fev.", time: "06:33" },
  { name: "ePrix de Al-Diriyah II", date: "28 de jan.", time: "14:03" },
  { name: "ePrix de Al-Diriyah I", date: "27 de jan.", time: "14:03" },
  { name: "ePrix da Cidade do México", date: "14 de jan.", time: "17:03" },
];


// Função para converter datas
const convertDate = (dateStr) => {
  const months = {
    "jan.": 0,
    "fev.": 1,
    "mar.": 2,
    "abr.": 3,
    "mai.": 4,
    "jun.": 5,
    "jul.": 6,
    "ago.": 7,
    "set.": 8,
    "out.": 9,
    "nov.": 10,
    "dez.": 11,
  };

  const [day, monthAbbr] = dateStr.split(" de ");
  const month = months[monthAbbr];
  const year = new Date().getFullYear(); // Usando o ano atual
  return new Date(year, month, day);
};

const Eventos = () => {
  const currentDate = new Date(2024, 8, 30); // Data atual: 30/09/2024

  return (
    <div className="news-page">
      <h1>Próximos Eventos</h1>
      <table className="events-table">
        <thead>
          <tr>
            <th>Evento</th>
            <th>Data</th>
            <th>Hora</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => {
            const eventDate = event.date === "Cancelado" ? null : convertDate(event.date);

            const isPast = eventDate && eventDate < currentDate; // Verifica se o evento já ocorreu
            const isCanceled = event.date === "Cancelado";

            return (
              <tr 
                key={index} 
                className={isCanceled ? "canceled" : ""}
                style={isCanceled ? { backgroundColor: '#eb6b62', color: 'white' } : (isPast ? { backgroundColor: '#dcdcdc' } : {})}
              >
                <td>{event.name} {isPast ? "(já ocorreu)" : ""}</td>
                <td>{isCanceled ? "Cancelado" : event.date}</td>
                <td>{event.time}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Eventos;
