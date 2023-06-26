const BASE_URL = 'https://api.mandarin.weniv.co.kr';

export const request = async (url, options) => {
  try {
    const response = await fetch(`${BASE_URL}/${url}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (err) {
    console.log(err);
  }
};

export const imageRequest = async (url, options) => {
  try {
    const response = await fetch(`${BASE_URL}/${url}`, { ...options });

    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (err) {
    console.log(err);
  }
};
