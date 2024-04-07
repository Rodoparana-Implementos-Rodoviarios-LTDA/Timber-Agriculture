const ButtonGradient = () => {
  return (
    <svg className="block" width={0} height={0}>
      <defs>
        <linearGradient id="btn-left" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#84cc16" /> {/* green-600 */}
          <stop offset="100%" stopColor="#86efac" /> {/* green-400 */}
        </linearGradient>
        <linearGradient id="btn-top" x1="100%" x2="0%" y1="50%" y2="50%">
          <stop offset="0%" stopColor="#86efac" /> {/* green-600 */}
          <stop offset="100%" stopColor="#10b981" /> {/* teal-600 */}
        </linearGradient>
        <linearGradient id="btn-bottom" x1="100%" x2="0%" y1="50%" y2="50%">
          <stop offset="0%" stopColor="#10b981" /> {/* teal-600 */}
          <stop offset="100%" stopColor="#5eead4" /> {/* cyan-400 */}
        </linearGradient>
        <linearGradient id="btn-right" x1="14.635%" x2="14.635%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#5eead4" /> {/* cyan-400 */}
          <stop offset="100%" stopColor="#84cc16" /> {/* green-600 */}
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ButtonGradient;
