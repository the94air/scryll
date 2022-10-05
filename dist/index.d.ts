interface Config {
    init: boolean;
    direction: "vertical" | "horizontal";
}
declare const scryll: (selector1: string, selector2: string, config: Config) => {
    init: () => void;
    kill: () => void;
};
export default scryll;
