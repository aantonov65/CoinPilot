import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PriceChangeElement = ({ elementType, data, property }) => {
  const Element = elementType;
  return property.toString().includes("-") ? (
    <Element className="price-down">
      {property.toFixed(2)}% <FontAwesomeIcon icon={faCaretDown} />
    </Element>
  ) : (
    <Element className="price-up">
      {property.toFixed(2)}% <FontAwesomeIcon icon={faCaretUp} />
    </Element>
  );
};

export default PriceChangeElement;
