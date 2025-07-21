import React from 'react';

// 1. Define un tipo para las props del componente.
type StructuredDataProps = {
  data: object;
};

// 2. Usa ese tipo para definir las props que recibe la función.
function StructuredData({ data }: StructuredDataProps) {
  if (!data) {
    return null;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default StructuredData;