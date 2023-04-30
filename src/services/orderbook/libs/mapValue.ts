export const mapValues = (maxVolume?: number, data?: number[]) => {
    const resultData =
        data && maxVolume && data.length
            ? data.map((currentVolume) => {
                  return { value: (currentVolume / maxVolume) * 100 };
              })
            : [];

    return resultData;
};
