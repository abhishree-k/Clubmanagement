export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  club: string;
  image?: string;
}

export interface Registration {
  id: string;
  name: string;
  email: string;
  phone: string;
  club: string;
  event?: string;
  submittedAt: string;
}

export const getEvents = (): Event[] => {
  const events = localStorage.getItem('events');
  return events ? JSON.parse(events) : [];
};

export const saveEvent = (event: Event): void => {
  const events = getEvents();
  events.push(event);
  localStorage.setItem('events', JSON.stringify(events));
};

export const updateEvent = (id: string, updatedEvent: Partial<Event>): void => {
  const events = getEvents();
  const index = events.findIndex(e => e.id === id);
  if (index !== -1) {
    events[index] = { ...events[index], ...updatedEvent };
    localStorage.setItem('events', JSON.stringify(events));
  }
};

export const deleteEvent = (id: string): void => {
  const events = getEvents();
  const filtered = events.filter(e => e.id !== id);
  localStorage.setItem('events', JSON.stringify(filtered));
};

export const getRegistrations = (): Registration[] => {
  const registrations = localStorage.getItem('registrations');
  return registrations ? JSON.parse(registrations) : [];
};

export const saveRegistration = (registration: Omit<Registration, 'id' | 'submittedAt'>): void => {
  const registrations = getRegistrations();
  const newRegistration: Registration = {
    ...registration,
    id: Date.now().toString(),
    submittedAt: new Date().toISOString()
  };
  registrations.push(newRegistration);
  localStorage.setItem('registrations', JSON.stringify(registrations));
};

