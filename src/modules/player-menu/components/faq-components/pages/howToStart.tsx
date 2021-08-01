import List from "../list";
// import Heading from "../heading/heading";
// import Text from "../text/text";
import Variant from "../variant";

export const HowToStart = () => {
  const array:string[] = ['eeeeee', 'rttete', 'fasfasf', 'sadarq', 'wqerqwr'];
  const str = 'sadasdas';
  return(
    <div>
      <List textArray={array} />
      <Variant text={str} />
    </div>
  )
}