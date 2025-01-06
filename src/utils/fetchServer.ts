type InitProps = {
  areaSize: number;
  setErrorServerConnection: (e: string) => void;
}

type ResponseInitProps = {
  message: string;
  areaSize: number;
  alive: number;
}

type ResponseNextProps = {
  generation: number;
  alives: number;
}

export const fetchServerInit = async ({ areaSize, setErrorServerConnection }: InitProps): Promise<ResponseInitProps | null> => {
  let data: ResponseInitProps | null = null;
  let res: number = -1;
  try {
    const response = await fetch(`http://localhost:5000/init/${areaSize}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ key: 'value' })
    });

    if (!response.ok) {
      const data = await response.json();
      setErrorServerConnection(data.message || 'Error initializing server');
    }

    data = await response.json();

    console.log(data);

  } catch (error: any) {
    console.error('Error: ', error);
    if (error instanceof Error) {
      setErrorServerConnection(error.message);
    } else {
      setErrorServerConnection('Unknown error');
    }

  };

  return data;
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
    console.error('Error: ', error.message);
  };

  return data;
}