export const getVans = async (id) => {
  const apiUrl = id ? `/api/vans/${id}` : "/api/vans";
  const res = await fetch(apiUrl);

  if (!res.ok) {
    throw {
      status: res.status,
      statusText: res.statusText,
    }
  }

  const data = await res.json();
  return data.vans;
}

export const getHostVans = async (id) => {
  const apiUrl = id ? `/api/host/vans/${id}` : "/api/host/vans";
  const res = await fetch(apiUrl);

  if (!res.ok) {
    throw {
      status: res.status,
      statusText: res.statusText,
    }
  }

  const data = await res.json();
  return data.vans;
} 
