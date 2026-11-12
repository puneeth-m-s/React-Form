import { useParams } from 'react-router-dom';
export function ThankYou() {
  const { name } = useParams<{ name: string }>();
  return <div>Thanks {name}. We will be in touch shortly</div>;
}
