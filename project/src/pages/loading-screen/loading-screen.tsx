function LoadingScreen(): JSX.Element {
  return (
    <div>
      <style dangerouslySetInnerHTML={{__html: '\n.loading {\n    display: flex;\n    justify-content: center;\n}\n\n.loading::after {\n    content: "";\n    width: 50px;\n    height: 50px;\n    border: 10px solid #dddddd;\n    border-top-color: #009579;\n    border-radius: 50%;\n    animation: loading 1s ease infinite;\n}\n\n@keyframes loading {\n    to {\n        transform: rotate(1turn);\n    }\n}\n' }} />
      <div style={{width: '150px', height: '150px'}}>
        <div className="loading loading--full-height" />
      </div>
    </div>
  );
}

export default LoadingScreen;
