export const formatVNDCurrency = (money: number) => {
    return money.toLocaleString('vi', {style : 'currency', currency : 'VND'});
}
