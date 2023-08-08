import { notFound } from "next/navigation";

type Props = {
  params: {
    product: string;
  };
};

export default function Product({ params }: Props) {
  if (params.product === "not-found") notFound(); // not-found.tsx
  return <h1>{params.product} 설명 페이지</h1>;
}

/**
* -----------------------------
* generateStaticParams
* -----------------------------
* generateStaticParams 함수는 사전에 미리 생성할 페이지의 경로를 정의합니다.
* 예를 들어, 'account'와 'setting' 페이지에 대한 경로를 미리 생성하고 싶다면 해당 값을 info 배열에 추가하면 됩니다.
* 함수는 info 배열의 각 요소를 product 속성을 가진 객체로 변환하여 반환합니다.

*/
export function generateStaticParams() {
  const products = ["shirts", "pants", "shoes"];
  return products.map((product) => ({ product }));
}
