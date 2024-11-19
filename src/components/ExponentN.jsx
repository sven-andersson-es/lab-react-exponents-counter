const ExponentN = ({ count, exponent }) => (
	<div className="exponent-counter-container">
		<p className="exponent-label">
			{count}
			<sup style={{ fontSize: "1.1rem", verticalAlign: "top" }}>{exponent}</sup>
		</p>
		<p className="exponent-result">
			{[...Array(exponent)].map((o, index) => {
				return index + 1 === exponent ? count + " " : count + " * ";
			})}
			= <span className="total">{count ** exponent}</span>
		</p>
	</div>
);

export default ExponentN;
