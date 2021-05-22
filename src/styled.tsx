import styled from 'styled-components';

export const StyledResponsiveContainer = styled.div`
	width: 100%;
	height: 100%;
	margin: 0rem;
`;

export const StyledMainContainer = styled(StyledResponsiveContainer)`
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
	font-family: Verdana, Geneva, Tahoma, sans-serif;
	position: relative;
`;

export const StyledCenteredDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const StyledErrorModal = styled.div`
	position: absolute;
	top: 0;
	left: 40%;
	width: auto;
	height: auto;
	padding: 1rem;
	background-color: #f333339b;
	color: white;
	border-radius: 3px;
`;

export const StyledTimeSelectionContainer = styled.div`
	height: 2rem;
	width: 30%;
	margin-left: 4.4rem;
	display: flex;
`;

export const StyledTimeButton = styled.button<{
	isSelected: boolean;
	isLoading: boolean;
}>`
	height: 100%;
	width: 20%;
	cursor: pointer;
	background: none;
	border: none;
	border-bottom: ${({ isSelected }) =>
		isSelected ? '4px solid #1317fcd6' : '2px solid #3461f7ca'};
	transition: all 0.2s ease-in;
	background-color: ${({ isLoading }) => (isLoading ? '#161aec96' : '')};
	&:hover {
		background-color: #7476ff55;
	}
`;

export const StyledTooltipContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: auto;
	width: 100%;
	padding: 0.3rem;
	border: 1px solid #adcaf790;
	background-color: #161aec96;
	color: #ebebebeb;
	text-shadow: 0 0 1px #e4e0d9e1;
	font-size: 14px;
	border-radius: 3px;
`;

export const StyledTooltipLine = styled.span`
	display: flex;
	justify-content: space-between;
`;

export const StyledClickableSpan = styled.span`
	color: #686bf7ca;
	transition: all 0.2s ease-in;
	cursor: pointer;

	&:hover {
		color: #272af3df;
	}
`;

export const StyledSvgImage = styled.img`
	margin-left: 0.5rem;
`;
