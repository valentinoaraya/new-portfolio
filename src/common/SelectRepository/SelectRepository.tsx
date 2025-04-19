import "./SelectRepository.css"

interface Props {
    isOpen: boolean;
    onSelectOption1: () => void;
    onSelectOption2: () => void;
    selectRepositoryRight?: boolean;
}

const SelectRepository: React.FC<Props> = ({ selectRepositoryRight, isOpen, onSelectOption1, onSelectOption2 }) => {
    return (
        <div className={`${selectRepositoryRight ? "selectRepositoryRight" : "selectRepository"} ${isOpen ? 'open' : ''}`}>
            <p className="optionRepository" onClick={onSelectOption1}>Front End</p>
            <p className="optionRepository" onClick={onSelectOption2}>Back End</p>
        </div>
    );
}

export default SelectRepository;
