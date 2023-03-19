import HOCWatchValue from './hoc-watch-value';

export default function HOCInput(props: {
  keys: string[];
  children: (value: any) => React.ReactNode;
}): any {
  const { keys } = props;
  const objValues = HOCWatchValue({ keys });

  return props.children(objValues);
}
