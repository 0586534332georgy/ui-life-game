type ResponseInitProps = {
  areaSize: number;
}

type ResponseNextProps = {
  generation: number,
  alives: number;
}

export const fetchServerInit = async (areaSize: number): Promise<number> => {
  let data: ResponseInitProps;
  let res: number = 0;
  try {
    const response = await fetch(`http://localhost:5000/init/${areaSize}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ key: 'value' })
    });

    data = await response.json();
    res = data.areaSize;

    console.log(data);

  } catch (error: any) {
    console.error('Error: ', error.text());
  };

  return res;
}

export const fetchServerNext = async (): Promise<ResponseNextProps> => {
  let data: ResponseNextProps = { generation: -1, alives: -1 };
  try {
    const response = await fetch(`http://localhost:5000/next`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    data = await response.json();
    console.log("generation: ", data.generation, "lives: ", data.alives);

  } catch (error: any) {
    console.error('Error: ', error.text());
  };

  return data;
}