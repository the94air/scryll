declare const scryll: (selector1: string, selector2: string, config?: {
    init: boolean;
    direction: string;
}) => {
    init: () => void;
    kill: () => void;
} | undefined;
export default scryll;
