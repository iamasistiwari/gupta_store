type SearchInputProps = {
    Icon: React.ElementType;
    placeText: string
};
  
  
function SearchBar({ Icon, placeText }: SearchInputProps) {
    return (
        <div className="relative mr-8 mt-2">
            <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
                placeholder={`${placeText}`}
                className="border p-2 pl-10 w-full focus:outline-none rounded-lg dark:bg-inherit"
            />
        </div>
    );
}
  
export default SearchBar;
  