import { Observable } from 'rxjs';
import { Flight } from '../../entities/flight';

const FlightObserver = () =>
  new Observable<Flight[]>((subscriber) => {
    subscriber.next([
      {
        date: '2023-10-21T22:25:02.9566184+00:00',
        delayed: true,
        from: 'Graz',
        id: 1,
        to: 'Mallorca',
      },
      {
        date: '2023-10-18T22:25:02.9566184+00:00',
        delayed: false,
        from: 'Graz',
        id: 2,
        to: 'Hamburg',
      },
      {
        date: '0001-01-01T00:00:00',
        delayed: false,
        from: 'Graz',
        id: 3,
        to: 'swsws',
      },
      {
        date: '2023-10-21T22:25:02.9566184+00:00',
        delayed: true,
        from: 'Graz',
        id: 4,
        to: 'Mallorca',
      },
      {
        date: '2023-10-18T22:25:02.9566184+00:00',
        delayed: false,
        from: 'Graz',
        id: 5,
        to: 'Hamburg',
      },
      {
        date: '0001-01-01T00:00:00',
        delayed: false,
        from: 'Graz',
        id: 6,
        to: 'swsws',
      },
      {
        date: '2023-10-21T22:25:02.9566184+00:00',
        delayed: true,
        from: 'Graz',
        id: 7,
        to: 'Mallorca',
      },
      {
        date: '2023-10-18T22:25:02.9566184+00:00',
        delayed: false,
        from: 'Graz',
        id: 8,
        to: 'Hamburg',
      },
      {
        date: '0001-01-01T00:00:00',
        delayed: false,
        from: 'Graz',
        id: 9,
        to: 'swsws',
      },
      {
        date: '2023-10-21T22:25:02.9566184+00:00',
        delayed: true,
        from: 'Graz',
        id: 10,
        to: 'Mallorca',
      },
      {
        date: '2023-10-18T22:25:02.9566184+00:00',
        delayed: true,
        from: 'Graz',
        id: 11,
        to: 'Hamburg',
      },
      {
        date: '0001-01-01T00:00:00',
        delayed: true,
        from: 'Graz',
        id: 12,
        to: 'swsws',
      },
      {
        date: '2023-10-21T22:25:02.9566184+00:00',
        delayed: true,
        from: 'Graz',
        id: 13,
        to: 'Mallorca',
      },
      {
        date: '2023-10-18T22:25:02.9566184+00:00',
        delayed: false,
        from: 'Graz',
        id: 14,
        to: 'Hamburg',
      },
      {
        date: '0001-01-01T00:00:00',
        delayed: false,
        from: 'Graz',
        id: 15,
        to: 'swsws',
      },
      {
        date: '2023-10-21T22:25:02.9566184+00:00',
        delayed: true,
        from: 'Graz',
        id: 16,
        to: 'Mallorca',
      },
      {
        date: '2023-10-18T22:25:02.9566184+00:00',
        delayed: false,
        from: 'Graz',
        id: 17,
        to: 'Hamburg',
      },
      {
        date: '0001-01-01T00:00:00',
        delayed: false,
        from: 'Graz',
        id: 18,
        to: 'swsws',
      },
      {
        date: '2023-10-21T22:25:02.9566184+00:00',
        delayed: false,
        from: 'Graz',
        id: 19,
        to: 'Mallorca',
      },
      {
        date: '2023-10-18T22:25:02.9566184+00:00',
        delayed: false,
        from: 'Graz',
        id: 20,
        to: 'Hamburg',
      },
    ]);
    subscriber.complete();
  });

export default FlightObserver;
