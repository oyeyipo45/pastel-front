interface ButtonProps {
  title: string;
}

export default function Button(props: ButtonProps) {
  const { title } = props;
  return <button className='px-4 py-2 rounded-md bg-blue-500 text-white'>{title}</button>;
}
